console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java 13 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimestampedKeyAndJoinSide"
 , "c2" : "TimestampedKeyAndJoinSide(boolean;K;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isLeftSide()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "K"
 , "c2" : "getKey()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "getTimestamp()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "2"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.svg" }

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
   "c1" : "00009"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class TimestampedKeyAndJoinSide contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.TimestampedKeyAndJoinSide@POLYN175312 the MagicNumber/String  'key cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.toString@POLYN176586 the MagicNumber/String  'left' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.toString@POLYN176586 the MagicNumber/String  'right' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.toString@POLYN176586 the MagicNumber/String  '&amp;lt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.toString@POLYN176586 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.toString@POLYN176586 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.toString@POLYN176586 the MagicNumber/String  '&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00048] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.equals@POLYN177012 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.equals@POLYN177012 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSide.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSide.equals@POLYN177012 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
