import Dialog from "react-native-dialog";

//* INTERFACE *//
interface Props {
  visible: boolean;
  title: string;
  description: string;
  buttons: { label: string; onPress(): void }[];
}

export const Alert: React.FC<Props> = ({
  description,
  title,
  visible,
  buttons,
}) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
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
