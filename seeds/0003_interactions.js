const moment = require("moment");

function randomInt(min = 0, max = 1) {
    return Math.floor(Math.random() * (max + 1));
}

function randomInteraction(post) {
    const postDate = moment(post.createdAt);
    const interactionDate = postDate.add(randomInt(0, 1000), 'minutes');
    const interactionType = ['LIKE', 'LIKE', 'DISLIKE'][randomInt(0, 2)];

    return {
        interactionType: interactionType,
        date: interactionDate,
        userId: randomInt(1, 100),
        postId: post.id,
    }
}

function generateInteractions(post, number) {
    const interactions = []
    for (let i = 0; i < number; i++) {
        const newInteraction = randomInteraction(post);

        if (interactions.some(i => i.userId === newInteraction.userId)) {
            continue;
        }

        if (newInteraction.date.isAfter(moment.now())) {
            continue;
        }

        interactions.push(newInteraction);
    }
    return interactions;
}

exports.seed = async function(knex) {
    await knex('interactions').del();

    const posts = await knex('posts').select('*');

    for (const post of posts) {
        const interactions = generateInteractions(post, randomInt(0, 20));
        if (interactions.length > 0) {
            await knex('interactions').insert(interactions);
        }
    }
};
