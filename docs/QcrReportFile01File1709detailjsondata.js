console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java 6 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Window"
 , "c2" : "org.apache.kafka.streams.kstream.internals.TimeWindow"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.TimeWindow" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimeWindow"
 , "c2" : "TimeWindow(long;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "overlap(Window)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00013] In method org.apache.kafka.streams.kstream.internals.TimeWindow.TimeWindow@POLYN167326 the MagicNumber/String  'Window endMs must be greater than window startMs.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method overlap arguments Window  other"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.html#19"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00019] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00020] The same method call other.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.streams.kstream.internals.TimeWindow.overlap@POLYN167914 the MagicNumber/String  'Cannot compare windows of different type. Other window has type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TimeWindow.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.streams.kstream.internals.TimeWindow.overlap@POLYN167914 the MagicNumber/String  '.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
