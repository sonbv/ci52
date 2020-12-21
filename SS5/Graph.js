import Vertice from "./Vertice.js";
import Edge from "./Edge.js";

export default class Graph {
  vertices;
  edges;
  constructor() {
    this.vertices = [];
    this.edges = [];
  }

  addVertice(vertice) {
    if (vertice instanceof Vertice) {
      this.vertices.push(vertice);
    }
  }

  addEdge(edge) {
    if (edge instanceof Edge) {
      this.edges.push(edge);
    }
  }

  info() {
    console.log("Vertice: ", this.vertices);
    console.log("Edge: ", this.edges);
  }
  findNearestVertices(verticalName) {
    let foundEdges = this.edges.filter(function (edge) {
      return edge.a.data == verticalName || edge.b.data == verticalName;
    });
    let foundVertices = [];
    foundEdges.forEach(function (edge) {
      if (edge.a.data == verticalName) {
        foundVertices.push(edge.b);
      } else if (edge.b.data == verticalName) {
        foundVertices.push(edge.a);
      }
      foundVertices.push(edge.a, edge.b);
    });
  }
}
