import express, { json } from "express"
import cartRoutes from "./routes/carts";

const app = express();
app.use(express.json())

app.use("/cart-items", cartRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
})