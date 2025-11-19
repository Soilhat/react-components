import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../../lib/Elements';
import { Form, Input } from '../../lib/Forms';
import { Card } from '../../lib/Layout';

type loginInfo = {
  username: string;
  password: string;
};

export default function Login({ onSubmit }: { onSubmit?: (login: loginInfo) => void }) {
  const [input, setInput] = useState({ username: ' ', password: ' ' });

  const handleSubmitEvent = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(input);
    } else {
      console.log(input);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card className="max-w-sm">
      <h2 className="text-secondary-700 dark:text-primary-300 text-2xl font-bold text-center mb-6">Hello</h2>
      <Form id="loginForm" onSubmit={handleSubmitEvent}>
        <Input
          name="username"
          type="string"
          label="Username"
          placeholder="Username"
          autoComplete="off"
          size="md"
          variant="outline"
          onChange={handleInput}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          label="Password"
          size="md"
          variant="outline"
          onChange={handleInput}
        />
        <Button type="submit">Login</Button>
      </Form>
      <p className="text-center text-sm">
        <a className="text-accent/100 dark:text-accent/100 hover:underline" href="/auth/register">
          Create Account
        </a>
      </p>
    </Card>
  );
}
