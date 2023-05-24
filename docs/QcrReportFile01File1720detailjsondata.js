console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java 34 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProcessorSupplier<K,V1,K,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#63"
 , "c1" : "KStreamKStreamJoin"
 , "c2" : "KStreamKStreamJoin(boolean;String;JoinWindowsInternal;ValueJoinerWithKey&lt;?superK,?superV1,?superV2,?extendsVOut&gt;;boolean;Optional&lt;String&gt;;TimeTracker)"
 , "c3" : "3"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#90"
 , "c1" : "Processor&lt;K,V1,K,VOut&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "17"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument windows is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method init arguments ProcessorContext&lt;K ,VOut &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.init@POLYN191909 the MagicNumber/String  1000L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method process arguments Record&lt;K ,V1 &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#124"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00124] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00164] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  'Skipping record due to null key or value. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  'Skipping record due to null key or value. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.process@POLYN192996 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method emitNonJoinedOuterRecords arguments KeyValueStore&lt;TimestampedKeyAndJoinSide&lt;K &gt; ,LeftOrRightValue&lt;V1 ,V2 &gt; &gt;  store|Record&lt;K ,V1 &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00212] For method emitNonJoinedOuterRecords list of called methods Object monObjet|long internalProcessorContext_currentSystemTimeMsN197284"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#213"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00213] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#214"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00214] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00241] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00242] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00243] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00244] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00253] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00260] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00261] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.emitNonJoinedOuterRecords@POLYN196676 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.emitNonJoinedOuterRecords@POLYN196676 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.emitNonJoinedOuterRecords@POLYN196676 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.emitNonJoinedOuterRecords@POLYN196676 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.emitNonJoinedOuterRecords@POLYN196676 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.streams.kstream.internals.KStreamKStreamJoin.KStreamKStreamJoinProcessor.emitNonJoinedOuterRecords@POLYN196676 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamKStreamJoin.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
