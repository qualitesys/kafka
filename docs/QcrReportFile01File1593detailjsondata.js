console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java 65 rule violations " 
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
 , "c5" : "00077"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#77"
 , "c1" : "StreamsBuilder"
 , "c2" : "StreamsBuilder()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#88"
 , "c1" : "StreamsBuilder"
 , "c2" : "StreamsBuilder(TopologyConfig)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#94"
 , "c1" : "Topology"
 , "c2" : "getNewTopology(TopologyConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00509"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#509"
 , "c1" : "StreamsBuilder"
 , "c2" : "addStateStore(StoreBuilder<?>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00612"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#612"
 , "c1" : "Topology"
 , "c2" : "build()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00623"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#623"
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
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method getNewTopology arguments TopologyConfig  topologyConfigs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#112"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00112] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#129"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00129] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#148"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00148] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#167"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00167] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topics can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
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
 , "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#214"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00214] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topicPattern can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#258"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00258] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#260"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00260] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#291"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00291] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#314"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00314] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#347"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00347] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#377"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00377] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#407"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00407] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#443"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00443] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#445"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00445] The argument materialized is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#484"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00484] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'topic can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00487"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#487"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00487] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'materialized can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00489"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#509"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00509] Lock statement on synchronized method addStateStore"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00509"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#509"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00509] For method addStateStore arguments StoreBuilder&lt;? &gt;  builder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00510"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.streams.StreamsBuilder.addStateStore@POLYN337984 the MagicNumber/String  'builder can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00547"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#547"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00547] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00550"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#550"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00550] The argument stateUpdateSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00551"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#551"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00551] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'storeBuilder can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00552"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00552] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00591"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#591"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00591] Lock statement on synchronized method "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00595"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#595"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00595] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'storeBuilder can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00596"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.streams.StreamsBuilder the MagicNumber/String  'consumed can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00612"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#612"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00612] Lock statement on synchronized method build"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00613"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#613"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00613] In method org.apache.kafka.streams.StreamsBuilder.build@POLYN342776 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00623"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#623"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00623] Lock statement on synchronized method build"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00623"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#623"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00623] For method build arguments Properties  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00625"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#625"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00625] In method org.apache.kafka.streams.StreamsBuilder.build@POLYN343127 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00612"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.html#612"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00612] Public method build is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/StreamsBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
