console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java 11 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Deserializer<Change<T>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.ChangedDeserializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.ChangedDeserializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#16"
 , "c1" : "ChangedDeserializer"
 , "c2" : "ChangedDeserializer(Deserializer<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#20"
 , "c1" : "Deserializer<T>"
 , "c2" : "inner()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#26"
 , "c1" : "void"
 , "c2" : "setIfUnset(SerdeGetter)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#33"
 , "c1" : "Change<T>"
 , "c2" : "deserialize(String;Headers;byte[])"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#47"
 , "c1" : "Change<T>"
 , "c2" : "deserialize(String;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#52"
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
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
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
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method setIfUnset arguments SerdeGetter  getter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument getter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.streams.kstream.internals.ChangedDeserializer.setIfUnset@POLYN148840 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method deserialize arguments String  topic|Headers  headers|byte[]  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.internals.ChangedDeserializer.deserialize@POLYN149159 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.internals.ChangedDeserializer.deserialize@POLYN149159 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.streams.kstream.internals.ChangedDeserializer.deserialize@POLYN149159 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.kstream.internals.ChangedDeserializer.deserialize@POLYN149159 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.kstream.internals.ChangedDeserializer.deserialize@POLYN149159 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method deserialize arguments String  topic|byte[]  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.kstream.internals.ChangedDeserializer.deserialize@POLYN150216 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/ChangedDeserializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
