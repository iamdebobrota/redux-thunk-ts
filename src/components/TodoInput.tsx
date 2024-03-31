import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/appReducer/action";
import { Todo } from "../redux/appReducer/actionType";
import { AppDispatch } from "../redux/store";
import { useToast } from "@chakra-ui/toast";

export default function TodoInput() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [todo, setTodo] = useState<Todo>({ title: "", completed: false });
  const dispatch: AppDispatch = useDispatch();
const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    dispatch(addTodos({todo, toast}));
    onClose();

  };
  return (
    <>
      <Button onClick={onOpen}>Add Todo</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" name="title" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Completed Status</FormLabel>
              <Select onChange={handleChange} name="completed">
                <option value="">Select the status</option>
                <option value="true">True</option>
                <option value="true">False</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
