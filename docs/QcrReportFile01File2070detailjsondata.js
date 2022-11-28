console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java 16 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "WrappingNullableSerializer<LeftOrRightValue<V1,V2>,Void,Object>"
 , "c2" : "org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#18"
 , "c1" : "LeftOrRightValueSerializer"
 , "c2" : "LeftOrRightValueSerializer(Serializer<V1>;Serializer<V2>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#25"
 , "c1" : "void"
 , "c2" : "setIfUnset(SerdeGetter)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#39"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#45"
 , "c1" : "byte[]"
 , "c2" : "serialize(String;LeftOrRightValue<V1,V2>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#66"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.svg" }

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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class LeftOrRightValueSerializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method setIfUnset arguments SerdeGetter  getter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument getter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.setIfUnset@POLYN151837 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.setIfUnset@POLYN151837 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method serialize arguments String  topic|LeftOrRightValue&lt;V1 ,V2 &gt;  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN152846 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
