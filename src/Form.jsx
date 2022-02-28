import Input from "./Input";
import Box from "./Box";
import Button from "./Button";

const Form = () => {
  return (
    <>
      <form>
        <Input title="Name" type="text" />
        <Input title="E-mail" type="text" />
        <Input title="Password" type="password" />
        <Box name="8+ chars" />
        <Box name="Capital" />
        <Box name="Number" />
        <Box name="Symbol" />
        <Button label="Sign me up!" />
      </form>
    </>
  );
};

export default Form;
