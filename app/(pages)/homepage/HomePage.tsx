import { useGetArticles } from "@/hooks/useArticle";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CustomerHomePage() {
  const initializePage = async () => {};

  useEffect(() => {
    initializePage();
  }, []);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[] | null>(null);

  const { data, isLoading, error } = useGetArticles(search);

  // console.log("response ================");
  // console.log(data);
  // console.log(data?.request);
  // console.log(data?.config);
  // console.log(data?.data);
  // console.log(data?.headers);
  // console.log(data?.status);
  // console.log(data?.statusText);
  // console.log(isLoading);
  // console.log(error);
  // console.log("=========================");

  useEffect(() => {
    if (error) {
      console.log("Error details:", {
        message: error.message,
        name: error.name,
        // @ts-ignore
        status: error.status,
        // @ts-ignore
        apiError: error.apiError,
      });
    }
  }, [error]);

  useEffect(() => {
    if (data?.data) {
      setArticles(data?.data.articles);
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View
          style={{
            borderRadius: 15,
            flex: 1,
            padding: 3,
          }}
        >
          <View
            style={{
              padding: 10,
              borderRadius: 12,
              backgroundColor: "#e1e1e1",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="search" size={25} style={{ padding: 10 }} />
            <TextInput
              onChangeText={(text) => setSearch(text)}
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "white",
                fontSize: 18,
                height: 45,
                flex: 1,
              }}
            />
          </View>
        </View>
      </View>
      {
        // loading ? (
        articles ? (
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {articles.map((article, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  Linking.openURL(article.url).catch((err) =>
                    console.error("Couldn't load page", err)
                  );
                }}
                style={{ width: "100%" }}
              >
                <View style={{ paddingVertical: 13, width: "100%" }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    {article.title}
                  </Text>
                  <Text style={{ color: "grey" }}>{article.title}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: 100,
                      width: "100%",
                      paddingTop: 10,
                    }}
                  >
                    {article.urlToImage && (
                      <Image
                        source={{ uri: article.urlToImage }}
                        style={{ flex: 1 }}
                      />
                    )}
                    <Text style={{ fontSize: 12, flex: 2, paddingLeft: 10 }}>
                      {article.content.length > 200
                        ? `${article.content.substring(0, 200)}...`
                        : article.content}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              paddingBottom: 100,
            }}
          >
            <Text
              style={{
                color: "#aaaaaa",
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Search something to get started!
            </Text>
          </View>
        )
        // )
        //  : (
        //   <View
        //     style={{
        //       flex: 1,
        //       justifyContent: "center",
        //       alignItems: "center",
        //       height: "100%",
        //       width: "100%",
        //     }}
        //   >
        //     <ActivityIndicator size="large" color={"#ff0000"} />
        //   </View>
        // )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 25,
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
