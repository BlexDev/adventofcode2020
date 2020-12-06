import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Advent of Code',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'My nice Flutter App'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        title: Text('Sample Code'),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            new NavButton(navName: "Day1"),
            new NavButton(navName: "Day2"),
            new NavButton(navName: "Day3"),
            new NavButton(navName: "Day4"),
            new NavButton(navName: "Day5"),
            new NavButton(navName: "Day6"),
            new NavButton(navName: "Day7"),
            new NavButton(navName: "Day8"),
            new NavButton(navName: "Day9"),
            new NavButton(navName: "Day10"),
            new NavButton(navName: "Day11"),
            new NavButton(navName: "Day12"),
            new NavButton(navName: "Day13"),
            new NavButton(navName: "Day14"),
            new NavButton(navName: "Day15"),
            new NavButton(navName: "Day16"),
            new NavButton(navName: "Day17"),
            new NavButton(navName: "Day18"),
            new NavButton(navName: "Day19"),
            new NavButton(navName: "Day20"),
            new NavButton(navName: "Day21"),
            new NavButton(navName: "Day22"),
            new NavButton(navName: "Day23"),
            new NavButton(navName: "Day24"),
          ],
        ),
      ),
      body: Center(
        child: Text('You have pressed the button $_counter times.'),
      ),
      bottomNavigationBar: BottomAppBar(
        shape: const CircularNotchedRectangle(),
        child: Container(
          height: 50.0,
        ),
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: () => setState(() {
                _incrementCounter();
              }),
          tooltip: 'Run code!',
          child: Icon(Icons.run_circle)),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
    );
  }
}

class NavButton extends StatelessWidget {
  final String navName;

  NavButton({Key key, this.navName}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text(this.navName),
    );
  }
}
