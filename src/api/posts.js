import { posts } from ".";

export function getPost(params) {
  return posts.get("/", { params });
}

export function getPostById(id) {
  // return posts.get(`/${id}`);
  return posts.get(id);
}

export function createPost(data) {
  return posts.post("", data);
}

export function UpdatePost(id, data) {
  return posts.put(`/${id}`, data);
}

export function DeletePost(id) {
  return posts.delete(`/${id}`);
}
