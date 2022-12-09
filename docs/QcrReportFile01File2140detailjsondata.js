console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java 9 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "WrappingNullableSerializer<TimestampedKeyAndJoinSide<K>,K,Void>"
 , "c2" : "org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSideSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSideSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#19"
 , "c1" : "TimestampedKeyAndJoinSideSerializer"
 , "c2" : "TimestampedKeyAndJoinSideSerializer(Serializer<K>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#25"
 , "c1" : "void"
 , "c2" : "setIfUnset(SerdeGetter)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#34"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#39"
 , "c1" : "byte[]"
 , "c2" : "serialize(String;TimestampedKeyAndJoinSide<K>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#53"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method setIfUnset arguments SerdeGetter  getter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument getter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSideSerializer.setIfUnset@POLYN150647 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method serialize arguments String  topic|TimestampedKeyAndJoinSide&lt;K &gt;  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSideSerializer.serialize@POLYN151268 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSideSerializer.serialize@POLYN151268 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.state.internals.TimestampedKeyAndJoinSideSerializer.serialize@POLYN151268 the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimestampedKeyAndJoinSideSerializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
