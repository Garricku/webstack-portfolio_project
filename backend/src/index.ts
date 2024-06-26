import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async(request, responce) => {
    responce.json({message: 'Ok!'});
});

app.listen(5000, () => {
    console.log('The app is cooking!');
});