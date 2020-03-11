package com.example.cloud_canatour;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private Button parks;
    private Button cities;
    private Button beaches;

    private Button login;
    private Button signup;
    private Button profile;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        parks = findViewById(R.id.home_parks);
        cities = findViewById(R.id.home_cities);
        beaches = findViewById(R.id.home_beaches);

        login = findViewById(R.id.home_login);
        signup = findViewById(R.id.home_signup);
        profile = findViewById(R.id.home_profile);


        parks.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDestination();

            }
        });

        cities.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDestination();

            }
        });

        beaches.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openDestination();

            }
        });

        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openSignup();
            }
        });

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openLogin();
            }
        });

        profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                openProfile();
            }
        });

    }

    private void openProfile() {
        Intent intent = new Intent(this,Profile.class);
        startActivity(intent);
    }

    public void openDestination(){
        Intent intent = new Intent(this, Destination.class);
        startActivity(intent);
    }


    private void openSignup() {
        Intent intent = new Intent(this, Signup.class);
        startActivity(intent);
    }

    private void openLogin(){
        Intent intent = new Intent(this, Login.class);
        startActivity(intent);
    }

}
