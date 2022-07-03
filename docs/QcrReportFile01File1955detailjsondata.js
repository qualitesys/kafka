console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java 15 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.StreamsMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.StreamsMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StreamsMetadata"
 , "c2" : "StreamsMetadata(HostInfo;Set<String>;Set<TopicPartition>;Set<String>;Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "HostInfo"
 , "c2" : "hostInfo()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "stateStoreNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "topicPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "standbyTopicPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "standbyStateStoreNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "host()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "port()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class StreamsMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00083] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.state.StreamsMetadata.equals@POLYN183527 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.state.StreamsMetadata.equals@POLYN183527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.state.StreamsMetadata.equals@POLYN183527 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.state.StreamsMetadata.toString@POLYN184685 the MagicNumber/String  'StreamsMetadata {' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.state.StreamsMetadata.toString@POLYN184685 the MagicNumber/String  'hostInfo=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.state.StreamsMetadata.toString@POLYN184685 the MagicNumber/String  ', stateStoreNames=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.state.StreamsMetadata.toString@POLYN184685 the MagicNumber/String  ', topicPartitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.state.StreamsMetadata.toString@POLYN184685 the MagicNumber/String  ', standbyStateStoreNames=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.state.StreamsMetadata.toString@POLYN184685 the MagicNumber/String  ', standbyTopicPartitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.state.StreamsMetadata.toString@POLYN184685 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.StreamsMetadata.host@POLYN183256"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/StreamsMetadata.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.state.StreamsMetadata.port@POLYN183407"
}} 
]
};
console.log('leListeStr 99 main end');
