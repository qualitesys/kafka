console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RocksDBTimestampedStore"
 , "c2" : "Comparable<TimestampedSegment>,Segment"
 , "c2" : "org.apache.kafka.streams.state.internals.TimestampedSegment"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimestampedSegment" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#31"
 , "c1" : "TimestampedSegment"
 , "c2" : "TimestampedSegment(String;String;long;RocksDBMetricsRecorder)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#40"
 , "c1" : "void"
 , "c2" : "destroy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#45"
 , "c1" : "void"
 , "c2" : "deleteRange(Bytes;Bytes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#50"
 , "c1" : "int"
 , "c2" : "compareTo(TimestampedSegment)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#55"
 , "c1" : "void"
 , "c2" : "openDB(Map&lt;String,Object&gt;;File)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#61"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#66"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#75"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method deleteRange arguments Bytes  keyFrom|Bytes  keyTo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method compareTo arguments TimestampedSegment  segment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument segment is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method openDB arguments Map&lt;String ,Object &gt;  configs|File  stateDir"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.state.internals.TimestampedSegment.toString@POLYN151237 the MagicNumber/String  'TimestampedSegment(id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.state.internals.TimestampedSegment.toString@POLYN151237 the MagicNumber/String  ', name=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.state.internals.TimestampedSegment.toString@POLYN151237 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00067] The same method call obj.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.state.internals.TimestampedSegment.equals@POLYN151443 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.state.internals.TimestampedSegment.equals@POLYN151443 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00045] Valued method deleteRange is empty or contains only a return. Interface segregation for Comparable&lt;TimestampedSegment&gt;,Segment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00045] In the class TimestampedSegment which implements the interface(s) Comparable&lt;TimestampedSegment&gt;,Segment, the method deleteRange is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedComparable&lt;TimestampedSegment&gt;,Segment"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedSegment.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
