"use server";
import { cookies } from "next/headers";

import  createClient  from "../lib/supabase/server";

export async function getDailyTask(userId: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Get tasks already done by user
  const { data: doneTasks } = await supabase
    .from("user_tasks")
    .select("task_id")
    .eq("user_id", userId);

  const doneIds = doneTasks?.map((t) => t.task_id) || [];

  // Get remaining tasks
  const { data: remaining } = await supabase
    .from("tasks")
    .select("*")
    .not("id", "in", `(${doneIds.join(",") || "null"})`);

  if (!remaining || remaining.length === 0) return null;

  // Pick random task
  const randomTask = remaining[Math.floor(Math.random() * remaining.length)];

  // Save as today's task
  await supabase.from("user_tasks").insert({
    user_id: userId,
    task_id: randomTask.id,
    date_done: new Date().toISOString().split("T")[0],
  });

  return randomTask;
}

