console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java 15 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractConfig"
 , "c2" : "org.apache.kafka.streams.TopologyConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.TopologyConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#95"
 , "c1" : "TopologyConfig"
 , "c2" : "TopologyConfig(StreamsConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#99"
 , "c1" : "TopologyConfig"
 , "c2" : "TopologyConfig(String;StreamsConfig;Properties)"
 , "c3" : "15"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00158"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#158"
 , "c1" : "Materialized.StoreType"
 , "c2" : "parseStoreType()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00165"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#165"
 , "c1" : "boolean"
 , "c2" : "isNamedTopology()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00170"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#170"
 , "c1" : "boolean"
 , "c2" : "isTopologyOverride(String;Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00176"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#176"
 , "c1" : "TaskConfig"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
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
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177559 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument globalAppConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.TopologyConfig.TopologyConfig@POLYN177744 the MagicNumber/String  'Topology {} is overriding {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.TopologyConfig.isNamedTopology@POLYN181919 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method isTopologyOverride arguments String  config|Properties  topologyOverrides"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#170"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00170] The argument topologyOverrides is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.TopologyConfig.isTopologyOverride@POLYN182166 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00187] The class TaskConfig contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/TopologyConfig.java.svg" }

};
console.log('leListeStr 99 main end');
