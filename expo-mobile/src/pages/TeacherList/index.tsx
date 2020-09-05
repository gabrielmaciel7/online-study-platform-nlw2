import React, { useState, useCallback, useContext, useEffect } from "react";
import { View, ScrollView, Text, Picker, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";

import api from "../../services/api";
import styles from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import FavoritesContext from "../../contexts/favorites";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState("Selecione a matéria");
  const [week_day, setWeekDay] = useState("Dia");
  const [time, setTime] = useState<string | null>(null);

  const [show, setShow] = useState(false);

  const { favoritesIds, loadFavorites } = useContext(FavoritesContext);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  console.log(teachers !== []);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    if (subject && week_day && time) {
      const response = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data);
    }

    setIsFiltersVisible(false);
  }

  const onChange = (event: Event, selectedTime?: Date) => {
    setShow(false);

    if (selectedTime) {
      setTime(
        selectedTime
          .toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })
          .substr(0, 5)
      );
    } else {
      setTime(time);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <View style={styles.input}>
              <Picker
                style={{ width: "100%", height: "100%" }}
                selectedValue={subject}
                onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
              >
                <Picker.Item label="Selecione a matéria" value={null} />
                <Picker.Item label="Artes" value="Artes" />
                <Picker.Item label="Biologia" value="Biologia" />
                <Picker.Item label="Física" value="Física" />
                <Picker.Item label="Química" value="Química" />
                <Picker.Item label="História" value="História" />
                <Picker.Item label="Português" value="Português" />
                <Picker.Item label="Educação Física" value="Educação Física" />
              </Picker>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <View style={styles.input}>
                  <Picker
                    style={{ width: "100%", height: "100%" }}
                    selectedValue={week_day}
                    onValueChange={(itemValue, itemIndex) =>
                      setWeekDay(itemValue)
                    }
                  >
                    <Picker.Item label="Dia" value={null} />
                    <Picker.Item label="Domingo" value="0" />
                    <Picker.Item label="Segunda-feira" value="1" />
                    <Picker.Item label="Terça-feira" value="2" />
                    <Picker.Item label="Quarta-feira" value="3" />
                    <Picker.Item label="Quinta-feira" value="4" />
                    <Picker.Item label="Sexta-feira" value="5" />
                    <Picker.Item label="Sábado" value="6" />
                  </Picker>
                </View>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <RectButton style={styles.input} onPress={() => setShow(true)}>
                  <Text>{time || "Horário"}</Text>
                </RectButton>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.length > 0 ? (
          teachers.map((teacher: Teacher) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favoritesIds.includes(teacher.id)}
            />
          ))
        ) : (
          <Text style={[styles.label, { alignSelf: "center" }]}>
            Nenhum proffy encontrado. Faça o filtro acima.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
