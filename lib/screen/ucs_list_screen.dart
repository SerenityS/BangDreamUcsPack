import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:url_launcher/url_launcher.dart';

class UCSListScreen extends StatefulWidget {
  const UCSListScreen({Key? key}) : super(key: key);

  @override
  _UCSListScreen createState() => _UCSListScreen();
}

class _UCSListScreen extends State<UCSListScreen> {
  final TextEditingController _searchString = TextEditingController();

  List songListData = [];

  @override
  void initState() {
    super.initState();
    loadSongJsonData();
  }

  @override
  void dispose() {
    super.dispose();
    _searchString.dispose();
  }

  Future loadSongJsonData() async {
    var jsonText = await rootBundle.loadString('assets/json/songLists.json');
    setState(
      () => songListData = json.decode(jsonText),
    );
  }

  Widget searchBar() {
    return Container(
      padding: const EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 10.0),
      child: TextFormField(
        controller: _searchString,
        decoration: const InputDecoration(
          hintText: "Search",
          suffixIcon: Icon(Icons.search),
        ),
        onChanged: (text) {
          setState(
            () {
              const UCSListScreen();
            },
          );
        },
      ),
    );
  }

  Widget songListView() {
    return Expanded(
      child: ListView.builder(
        itemCount: songListData.length,
        itemBuilder: (BuildContext context, int index) {
          var file = songListData[index]['file'];
          var songArtist = songListData[index]['songArtist'];
          var songTitle = songListData[index]['songTitle'];
          var stepCharts = songListData[index]['stepChart'].keys.toList();
          var chartOrder = songListData[index]['chartOrder'];
          var chartSuffix = 0;

          var sscUrl =
              "https://player.qwertycvb.site/#scrollSpeed=4#SSC=$songTitle#Folder=/ssc/$file/#ChartNum=";
          try {
            chartSuffix = songListData[index]['chartSuffix'];
            if (chartSuffix > 0) {
              sscUrl =
                  "https://player.qwertycvb.site/#scrollSpeed=4#SSC=$chartSuffix#Folder=/ssc/$chartSuffix/#ChartNum=";
            }
          } catch (e) {}

          if (songTitle
                  .toLowerCase()
                  .replaceAll(' ', '')
                  .contains(_searchString.text.toLowerCase()) ||
              songArtist
                  .toLowerCase()
                  .replaceAll(' ', '')
                  .contains(_searchString.text.toLowerCase())) {
            return ExpansionTile(
              leading: ClipRRect(
                borderRadius: BorderRadius.circular(8.0),
                child: Image.network(
                  'https://beaton.qwertycvb.site/jacket/BangDream/$file/Title.png',
                  fit: BoxFit.fill,
                ),
              ),
              title: Text(
                songTitle,
                overflow: TextOverflow.ellipsis,
                style:
                    const TextStyle(fontSize: 19, fontWeight: FontWeight.w600),
              ),
              subtitle: Text(
                songArtist,
              ),
              children: [
                StaggeredGridView.countBuilder(
                  physics: const NeverScrollableScrollPhysics(),
                  shrinkWrap: true,
                  itemCount: stepCharts.length,
                  itemBuilder: (BuildContext context, int i) {
                    return InkWell(
                      onLongPress: () => launch("$sscUrl${chartOrder[i]}"),
                      child: Container(
                        margin: const EdgeInsets.fromLTRB(10.0, 5.0, 10.0, 0.0),
                        child: Column(
                          children: [
                            Image(
                              image: AssetImage(
                                  'assets/level/${stepCharts[i]}.png'),
                              width: 70,
                              height: 70,
                              fit: BoxFit.cover,
                            ),
                            const SizedBox(height: 5),
                            Text(
                              "${songListData[index]['stepChart'][stepCharts[i]]}",
                              style: const TextStyle(
                                  fontSize: 17, fontWeight: FontWeight.w600),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                  staggeredTileBuilder: (int index) =>
                      const StaggeredTile.fit(1),
                  crossAxisCount: stepCharts.length,
                ),
                Padding(
                  padding: const EdgeInsets.all(10.0),
                  child: SizedBox(
                    height: 50,
                    child: OutlinedButton(
                      onPressed: () => launch(
                          "https://beaton.qwertycvb.site/BangDream/files/$file.zip"),
                      child: const Text(
                        "Download",
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 17,
                        ),
                      ),
                      style: OutlinedButton.styleFrom(
                          side: const BorderSide(color: Colors.black)),
                    ),
                  ),
                ),
              ],
            );
          } else {
            return const SizedBox(height: 0);
          }
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('BanGDream! UCS Pack'),
      ),
      body: Column(
        children: [
          searchBar(),
          songListView(),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Add your onPressed code here!
        },
        child: const Icon(
          Icons.info_outline_rounded,
          color: Colors.white,
        ),
        backgroundColor: Colors.grey,
      ),
    );
  }
}
