import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  List,
  ListItem,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="xl">
          Todo App
        </Heading>
        <HStack w="100%">
          <Input
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">
            Add Task
          </Button>
        </HStack>
        <Box w="100%">
          <List spacing={3}>
            {tasks.map((task, index) => (
              <ListItem
                key={index}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={2}
                borderWidth={1}
                borderRadius="md"
              >
                <Text>{task}</Text>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => deleteTask(index)}
                  leftIcon={<FaTrash />}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;