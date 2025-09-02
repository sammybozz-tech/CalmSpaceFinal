import { supabase } from "../supabaseClient";

export async function fetchTodos(userId: string) {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;
  return data;
}

export async function addTodo(userId: string, task: string) {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ user_id: userId, task, completed: false }]);

  if (error) throw error;
  return data;
}

export async function toggleTodo(id: number, completed: boolean) {
  const { data, error } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id);

  if (error) throw error;
  return data;
}

export async function deleteTodo(id: number) {
  const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id);

  if (error) throw error;
  return data;
}
