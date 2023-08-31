import * as React from "react";
import App from "../../../App";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./styles";
// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";
// API
import api from "../../Services/api";

export default function Home({ navigation }) {
  const [filter, setFilter] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState(false);
  const [lateCount, setLateCount] = useState();
  const [mac_address, setMac_address] = useState();

  async function loadTasks() {
    setLoad(true);
    await api
      .get(`/task/filter/${filter}/11:11:11:11:11:22`)
      .then((response) => {
        setTasks(response.data);
        setLoad(false);
      });
  }

  async function lateVerify() {
    await api
      .get(`/task/filter/${filter}/11:11:11:11:11:22`)
      .then((response) => {
        setLateCount(response.data.length);
      });
  }
  function New() {
    navigation.navigate("Task");
  }
  function Notification() {
    setFilter("late");
  }
  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filter]);
  return (
    <View style={styles.container}>
      <Header
        showNotification={true}
        showLeftImage={true}
        pressBellNotification={Notification}
        late={lateCount}
      />

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
        <Text style={styles.titleText}>
          {" "}
          TAREFAS{filter == "late" && " ATRASADAS"}
        </Text>
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
              done={t.done}
              title={t.title}
              when={t.when}
              type={t.type}
            />
          ))
        )}
      </ScrollView>

      <Footer icon={"addButton"} onPress={New} />
    </View>
  );
}
