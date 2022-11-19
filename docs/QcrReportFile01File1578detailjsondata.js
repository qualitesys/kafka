console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java 66 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.StreamsBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.StreamsBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#47"
 , "c1" : "StreamsBuilder"
 , "c2" : "StreamsBuilder()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#54"
 , "c1" : "StreamsBuilder"
 , "c2" : "StreamsBuilder(TopologyConfig)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#60"
 , "c1" : "Topology"
 , "c2" : "getNewTopology(TopologyConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00207"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#207"
 , "c1" : "StreamsBuilder"
 , "c2" : "addStateStore(StoreBuilder<?>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00247"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#247"
 , "c1" : "Topology"
 , "c2" : "build()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00252"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#252"
 , "c1" : "Topology"
 , "c2" : "build(Properties)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "39"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "19"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00037] The class StreamsBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method getNewTopology arguments TopologyConfig  topologyConfigs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#65"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00065] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#70"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00070] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#76"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00076] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#81"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00081] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topics can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#90"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00090] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#95"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00095] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topicPattern can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#103"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00103] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#119"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00119] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#124"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00124] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#140"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00140] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#155"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00155] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#170"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00170] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#175"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00175] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#192"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00192] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#207"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00207] Lock statement on synchronized method addStateStore"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#207"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00207] For method addStateStore arguments StoreBuilder&lt;? &gt;  builder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.StreamsBuilder.addStateStore@POLYN335326 the MagicNumber/String  'builder can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#215"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00215] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00218] The argument stateUpdateSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'storeBuilder can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#231"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00231] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'storeBuilder can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#247"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00247] Lock statement on synchronized method build"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.streams.StreamsBuilder.build@POLYN340118 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#252"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00252] Lock statement on synchronized method build"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#252"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00252] For method build arguments Properties  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.streams.StreamsBuilder.build@POLYN340469 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#247"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00247] Public method build is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
