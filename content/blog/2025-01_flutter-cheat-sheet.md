---
title: The only Flutter Cheat Sheet you Need
updatedAt: 2025-01-01
done: false
description: Essential Flutter concepts, widgets, and code examples from my learning journey
slug: flutter-cheat-sheet
---

In the past few weeks, I've participated in NetNinja's Flutter course (without wanting to advertise: it is great. the $10 is worth it). This blog post contains all my notes on this course. This cheatsheet contains all you need to know about Flutter.

## Running the App

After installing Flutter on your system (which can be quiet complicated) and creating a new Flutter app, you can run your application using `flutter run`.

Your app will start executing in the main function of the `lib/main.dart` file. The main function must call `runApp` to start the app. The `runApp` function takes a widget as an argument (in most cases `MaterialApp`).

```dart
void main() {
  runApp(MaterialApp(
      home: Scaffold(
    appBar: AppBar(
      title: const Text('My Coffee Id'),
      backgroundColor: Colors.brown[700],
      centerTitle: true,
    ),
    body: const Home(),
  )));
}
```

You can learn more about the `Scaffold` and `MaterialApp` widget in the [Built-in Widgets](#build-in-widgets) section.

## Widgets

Widgets are the core of every Flutter application (like an HTML element). Like in the web, Flutter uses a widget tree to construct complex pages or UI elements. Widgets are represented as classes.

### Build-in Widgets

By default, Flutter has already a large collection of built-in widgets. This list contains every common built-in widget, which I know yet:

- **Text**: A basic widget to display text, similar to a `span` in HTML.
- **MaterialApp**: The main entry point for a Flutter app, providing [Material Design](https://m3.material.io/) structure and theming.
- **Scaffold**: A layout template that provides basic visual structure, including an AppBar, body area, and floating action button.
- **AppBar**: A Material Design app bar typically placed at the top of the screen.
- **Container**: A utility widget for layout, allowing you to apply padding, margins, borders, and more. It's similar to the box model in HTML.
- [**Row** and **Column**](#rows-and-columns): Rows and columns are used to structure multiple widgets in one direction. They are very similar to flexbox in CSS
- **SizedBox**: Used for adding space between two widgets without using containers, padding and margin
- **Expanded**: Similar to a flex-item in CSS. Its children take all available space (no more, no less)

We gonna dive deeper into some of those widgets in later sections.

### Stateless Widgets

As the name says, stateless widgets are widgets without state. This means that they cannot store or process data (e.g. data fetching, input values etc...).

A stateless widget can be defined by creating a class which inherits from `StatelessWidget`. It's constructor deconstruct the `key` value from it's parent. The widget itself is returned from the `build` function.

```dart
class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.orange,
      padding: const EdgeInsets.all(20),
      margin: const EdgeInsets.fromLTRB(10, 40, 0, 0),
      child: const Text(
        "Hello World",
        style: TextStyle(
            fontSize: 18.0,
            letterSpacing: 4,
            decoration: TextDecoration.underline),
      ),
    );
  }
}
```

### Stateful Widgets

Instead of stateless widgets, stateful widgets consist of two classes: a state class and a widget class. The widget class inherits from `StatefulWidget`, while the state class inherits from a `State<YourWidgetClass>` generic.

The widget class has a `createState` method, which returns a new instance of the state class.

```dart
class CoffeePrefs extends StatefulWidget {
  const CoffeePrefs({super.key});

  @override
  State<CoffeePrefs> createState() => _CoffeePrefsState();
}
```

Like a stateless widget, the state class (which start by convention with an underscore) has a `build` method. Its state is represented by properties on the class. If you want to update the state, you have to do this by calling the setState function which wraps the block where you can update the state.

```dart
class _CoffeePrefsState extends State<CoffeePrefs> {
  int strength = 1;

  void increaseStrength() {
    setState(() {
      strength = strength < 5 ? strength + 1 : 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Row(children: [
        Text("$strength"),
      ]),
    ]);
  }
}
```

## Rows and Columns

Columns and rows in Flutter serve a similar purpose as flexbox in CSS, but are implemented as two distinct widgets: `Row` and `Column`. A row arranges its children horizontally, while a column stacks them vertically.
Both of them can have multiple children elements. Like in CSS you can customize the main axis (`justify-content`) and the main axis (`align-items`).

```dart
class ColumnsExample extends StatelessWidget {
  const ColumnsExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            color: Colors.red,
            child: const Text("one"),
          ),
          Container(
            color: Colors.green,
            child: const Text("two"),
          ),
        ],
      ),
    );
  }
}
```

In order not to make the blog entry longer than necessary, I will skip an example for the row here, since in the end it is just a column rotated by 90°.

## Images

Before you can use images in Flutter, you have to tell Flutter where the images are stored (in the most cases somewhere in the `assets` directory). You can do this by adding items to the `flutter/assets` section of the `pubspec.yaml` file:

```yml
flutter:
  # ...
  assets:
    - assets/img/ # The images are in the assets/img/ folder
  # ...
```

After telling Flutter where your images are, you can use them via the `Image` widget, which is commonly constructed using the `Image.asset` contructor function.

```dart
Image.asset(
    'assets/img/coffee_bean.png',
    width: 25,
    // Changes image color to background color
    color: Colors.brown[100],
    // Multiplies image color with background color to remove
    // the image background (requires that the color of
    // the image is equal to the background color)
    colorBlendMode: BlendMode
        .multiply,
    ),
```

## Data Transfer from Parent to Child

Passing data from parent to child widgets is straight forward. All you have to do is to add the variables you want to be passed in the constructor of the child widget. This works for also for keyword arguments.

```dart
class Props extends StatelessWidget {
  const Props(this.number, {super.key, this.text});

  final int number;
  final String? text;

  @override
  Widget build(BuildContext context) {
    return Text('You gave me $number and $text');
  }
}
```
