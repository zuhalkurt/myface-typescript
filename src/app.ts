import express from "express";
import cors from "cors";
import "express-async-errors";
import postRoutes from "./routes/postRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = process.env['PORT'] || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: "http://localhost:3000"}));

app.set('view engine', 'ejs');

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.get('', (request, response) => {
    return response.redirect('/posts/');
});

app.listen(port, () => {
    console.log(`Server started and is running at http://localhost:${port}`);
});
