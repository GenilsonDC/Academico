import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";
// API
import api from "../../Services/api";

export default function Home() {
  const [filter, setFilter] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);

  async function loadTasks() {
    setLoad(true);
    await api.get("/task/filter/all/11:11:11:11:11:22").then((response) => {
      setTasks(response.data);
      setLoad(false);
    });
  }
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <View style={styles.container}>
      <Header showNotification={true} showLeftImage={true} />

      <View style={styles.filters}>
        <TouchableOpacity onPress={() => setFilter("all")}>
          <Text
            style={
              filter == "all" ? styles.filterActived : styles.filterDesactived
            }
          >
            Todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("today")}>
          <Text
            style={
              filter == "today" ? styles.filterActived : styles.filterDesactived
            }
          >
            Hoje
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("week")}>
          <Text
            style={
              filter == "week" ? styles.filterActived : styles.filterDesactived
            }
          >
            Semana
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("month")}>
          <Text
            style={
              filter == "month" ? styles.filterActived : styles.filterDesactived
            }
          >
            Mês
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("year")}>
          <Text
            style={
              filter == "year" ? styles.filterActived : styles.filterDesactived
            }
          >
            Ano
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}> TAREFA</Text>
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {load ? (
          <ActivityIndicator size={12} color={"#FF4500"} />
        ) : (
          tasks.map((t) => (
            <TaskCard
              done={false}
              title={t.title}
              when={t.when}
              type={t.type}
            />
          ))
        )}
      </ScrollView>

      <Footer icon={"addButton"} />
    </View>
  );
}
