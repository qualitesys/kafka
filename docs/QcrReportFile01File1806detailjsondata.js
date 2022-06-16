console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java 29 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.xml" 
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class AbstractProcessorContext contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.AbstractProcessorContext@POLYN180862 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.AbstractProcessorContext@POLYN180862 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method setSystemTimeMs arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.keySerde@POLYN182084 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.valueSerde@POLYN182328 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method register arguments StateStore  store|StateRestoreCallback  stateRestoreCallback"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method register arguments StateStore  store|StateRestoreCallback  stateRestoreCallback|CommitCallback  checkpoint"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.register@POLYN183018 the MagicNumber/String  'Can only create state stores during initialization.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.register@POLYN183018 the MagicNumber/String  'store must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.topic@POLYN183509 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.topic@POLYN183509 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.partition@POLYN183759 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.partition@POLYN183759 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.offset@POLYN184018 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.offset@POLYN184018 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.headers@POLYN184277 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.timestamp@POLYN184544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.timestamp@POLYN184544 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method appConfigsWithPrefix arguments String  prefix"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method setRecordContext arguments ProcessorRecordContext  recordContext"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method setCurrentNode arguments ProcessorNode&lt;? ,? ,? ,? &gt;  currentNode"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.initialize@POLYN186270 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.streams.processor.internals.AbstractProcessorContext.uninitialize@POLYN186381 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method changelogFor arguments String  storeName"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method addProcessorMetadataKeyValue arguments String  key|long  value"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#251"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00251] For method processorMetadataForKey arguments String  key"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/AbstractProcessorContext.java.html#256"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00256] For method setProcessorMetadata arguments ProcessorMetadata  metadata"
}} 
]
};
console.log('leListeStr 99 main end');
