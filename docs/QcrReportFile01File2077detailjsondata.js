console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java 24 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TimeOrderedKeyValueBufferChangelogDeserializationHelper"
 , "c2" : "TimeOrderedKeyValueBufferChangelogDeserializationHelper()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "DeserializationResult"
 , "c2" : "deserializeV0(ConsumerRecord<byte[],byte[]>;Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "DeserializationResult"
 , "c2" : "deserializeV1(ConsumerRecord<byte[],byte[]>;Bytes;byte[])"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "DeserializationResult"
 , "c2" : "duckTypeV2(ConsumerRecord<byte[],byte[]>;Bytes)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "DeserializationResult"
 , "c2" : "deserializeV2(ConsumerRecord<byte[],byte[]>;Bytes)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "DeserializationResult"
 , "c2" : "deserializeV3(ConsumerRecord<byte[],byte[]>;Bytes)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class TimeOrderedKeyValueBufferChangelogDeserializationHelper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class DeserializationResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method deserializeV0 arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record|Bytes  key|byte[]  previousBufferedValue"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.deserializeV0@POLYN162006 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.deserializeV0@POLYN162006 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method deserializeV1 arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record|Bytes  key|byte[]  previousBufferedValue"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00073] For method deserializeV1 list of called methods Object monObjet|org.apache.kafka.streams.state.internals.ContextualRecord ContextualRecord_deserializeN164021"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#73"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00073] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.deserializeV1@POLYN163377 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.deserializeV1@POLYN163377 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method duckTypeV2 arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record|Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.duckTypeV2@POLYN164640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.duckTypeV2@POLYN164640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.duckTypeV2@POLYN164640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.duckTypeV2@POLYN164640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.duckTypeV2@POLYN164640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.state.internals.TimeOrderedKeyValueBufferChangelogDeserializationHelper.duckTypeV2@POLYN164640 the MagicNumber/String  'Couldn't deserialize record as v2 or v3: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method deserializeV2 arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record|Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00126] For method deserializeV2 list of called methods Object monObjet|org.apache.kafka.streams.state.internals.ContextualRecord ContextualRecord_deserializeN166169|byte[] Utils_getNullableSizePrefixedArrayN166451"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method deserializeV3 arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record|Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00137] For method deserializeV3 list of called methods Object monObjet|org.apache.kafka.streams.state.internals.BufferValue BufferValue_deserializeN167219"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/TimeOrderedKeyValueBufferChangelogDeserializationHelper.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
