console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java 23 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractConfig"
 , "c2" : "org.apache.kafka.streams.TopologyConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.TopologyConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TopologyConfig"
 , "c2" : "TopologyConfig(StreamsConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopologyConfig"
 , "c2" : "TopologyConfig(String;StreamsConfig;Properties)"
 , "c3" : "21"
 , "c4" : "33"
}} 
,
{ "ligne" : {
   "c1" : "Materialized.StoreType"
 , "c2" : "parseStoreType()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isNamedTopology()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isTopologyOverride(String;Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskConfig"
 , "c2" : "getTaskConfig()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182495 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument globalAppConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is using both deprecated config {} and new config {}, hence {} is ignored and the new config {} (value {}) is used' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is using only deprecated config {}, and will be used to set cache size to {}; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'we suggest setting the new config {} instead as deprecated {} would be removed in the future.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding cache size to {} but this will not have any effect as the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'topology-level cache size config only controls whether record buffering is enabled ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'or disabled, thus the only valid override value is 0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding cache size to {}, record buffering will be disabled' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN182680 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.streams.TopologyConfig.isNamedTopology@POLYN188152 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method isTopologyOverride arguments String  config|Properties  topologyOverrides"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#213"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00213] The argument topologyOverrides is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.TopologyConfig.isTopologyOverride@POLYN188399 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00230] The class TaskConfig contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
]
};
console.log('leListeStr 99 main end');
