import React from 'react'
import './Login.css';
import { PasswordInput } from '@mantine/core';
import { useState } from 'react';
import { Checkbox } from '@mantine/core';


const Login = () =>{    
  const [value, setValue] = useState('');                   
  return (
    <section>
      <div className="login_button">ログイン</div>

      <div className="login_password">
        <PasswordInput
          placeholder="パスワードを入力して下さい"
          label="パスワード"
          description="Password must include at least one letter, number and special character"
          withAsterisk
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <PasswordInput error="Invalid password" />
      </div>

      <div className="area_code">
        <PasswordInput
          placeholder="地区番号を入力して下さい"
          label="地区番号"
          description="Password must include at least one letter, number and special character"
          withAsterisk
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </div>

      <div className="login_text">ログイン</div>
    </section>

  )
}


export default Login;
