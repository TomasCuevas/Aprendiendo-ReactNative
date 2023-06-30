import Dialog from "react-native-dialog";

//* INTERFACE *//
interface Props {
  buttons: { label: string; onPress(): void }[];
  description: string;
  inputValue: string;
  password?: boolean;
  title: string;
  visible: boolean;
  updateValue(newValue: string): void;
}

export const Prompt: React.FC<Props> = ({
  buttons,
  description,
  inputValue,
  password,
  title,
  visible,
  updateValue,
}) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
      <Dialog.Input
        secureTextEntry={password}
        autoFocus
        value={inputValue}
        onChangeText={updateValue}
      />
      {buttons.map((button) => (
        <Dialog.Button
          label={button.label}
          onPress={button.onPress}
          key={button.label}
        />
      ))}
    </Dialog.Container>
  );
};
