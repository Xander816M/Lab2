import React from "react";
import { Text, View} from "react-native";
import ToDoList from "@/component/ToDoList";
import ToDoForm from "@/component/ToDoForm";

export default function Index() {
  return (
    <View>
      <ToDoList/>
      <ToDoForm/>
    </View>
  );
}
