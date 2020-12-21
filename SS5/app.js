import Graph from "./Graph.js";
import Vertice from "./Vertice.js";
import Edge from "./Edge.js";

let graph = new Graph();

let A = new Vertice("A");
let B = new Vertice("B");
let C = new Vertice("C");
let D = new Vertice("D");
let E = new Vertice("E");

let AB = new Edge(A, B);
let AC = new Edge(A, C);
let AE = new Edge(A, E);
let BD = new Edge(B, D);

graph.addVertice(A);
graph.addVertice(B);
graph.addVertice(C);
graph.addVertice(D);
graph.addVertice(E);

graph.addEdge(AB);
graph.addEdge(AC);
graph.addEdge(AE);
graph.addEdge(BD);

graph.info();

console.log(graph.findNearestVertices("A"));
