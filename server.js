import { createServer, Model } from "miragejs";
import { Response } from "miragejs";

createServer({
  models: {
    plots: Model,
  },

  seeds(server) {
    server.create("plot", {
      id: "1",
      name: "Front and Back Gardens",
      price: 20,
      description:
        "Front & back garden in leafy Leckhampton, Cheltenham with a raised bed, needs some TLC. Many shrubs, trees and a chance to grown your own vegetables",
      imageUrl: "https://i.ibb.co/VgcBCcF/close-up-vegetation-front-house.jpg",
      condition: "needs-love",
    });
    server.create("plot", {
      id: "2",
      name: "Back Garden",
      price: 30,
      description: "Very quiet sunny back garden in London",
      imageUrl:
        "https://i.ibb.co/FBj4pfW/sincerely-media-Agr1-YTrz-YPI-unsplash.jpg",
      condition: "good-condition",
    });
    server.create("plot", {
      id: "3",
      name: "Surplus Land",
      price: 40,
      description:
        "Large plot of surplus land opposite a residential flat block",
      imageUrl:
        "https://i.ibb.co/spTkbfm/steve-adams-b-Y-q4-Vod-Uc0-unsplash.jpg",
      condition: "top-notch",
    });
    server.create("plot", {
      id: "4",
      name: "Small Garden",
      price: 20,
      description:
        "Small Garden with lots of natural light, has been rented before so in great condition",
      imageUrl: "https://i.ibb.co/VgcBCcF/close-up-vegetation-front-house.jpg",
      condition: "needs-love",
    });
    server.create("plot", {
      id: "5",
      name: "Commerical land",
      price: 10,
      description:
        "Commerical Land at the back of an industrial estate, start from scratch project",
      imageUrl:
        "https://i.ibb.co/spTkbfm/steve-adams-b-Y-q4-Vod-Uc0-unsplash.jpg",
      condition: "needs-love",
    });
    server.create("plot", {
      id: "6",
      name: "Disused plot",
      price: 30,
      description:
        "Tired plot that needs attention and would be great for producing own produce",
      imageUrl:
        "https://i.ibb.co/FBj4pfW/sincerely-media-Agr1-YTrz-YPI-unsplash.jpg",
      condition: "top-notch",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    this.timing = 2000;

    this.get("/plots", (schema, request) => {
      // use commented out response to test error handling
      // return new Response(400, {}, { error: "Error fetching data" });
        return schema.plots.all()
    });

    this.get("/plots/:id", (schema, request) => {
      const id = request.params.id;
      return schema.plots.find(id);
    });
  },
});
