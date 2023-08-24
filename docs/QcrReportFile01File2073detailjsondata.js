console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "WrappingNullableSerializer<LeftOrRightValue<V1,V2>,Void,Object>"
 , "c2" : "org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#36"
 , "c1" : "LeftOrRightValueSerializer"
 , "c2" : "LeftOrRightValueSerializer(Serializer&lt;V1&gt;;Serializer&lt;V2&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#43"
 , "c1" : "void"
 , "c2" : "setIfUnset(SerdeGetter)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#57"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#63"
 , "c1" : "byte[]"
 , "c2" : "serialize(String;LeftOrRightValue&lt;V1,V2&gt;)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#84"
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
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.svg" }

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
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method setIfUnset arguments SerdeGetter  getter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument getter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.setIfUnset@POLYN162201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.setIfUnset@POLYN162201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method serialize arguments String  topic|LeftOrRightValue&lt;V1 ,V2 &gt;  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.LeftOrRightValueSerializer.serialize@POLYN163210 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/LeftOrRightValueSerializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
