console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java 8 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method prepareValueSerdeForStore arguments Serde&lt;ValueAndTimestamp&lt;V &gt; &gt;  valueSerde|SerdeGetter  getter"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument getter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore.prepareValueSerdeForStore@POLYN169917 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method getWithBinary arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method putIfDifferentValues arguments K  key|ValueAndTimestamp&lt;V &gt;  newValue|byte[]  oldSerializedValue"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore.putIfDifferentValues@POLYN171197 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.state.internals.MeteredTimestampedKeyValueStore.putIfDifferentValues@POLYN171197 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredTimestampedKeyValueStore.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00075] The class RawAndDeserializedValue contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
]
};
console.log('leListeStr 99 main end');
