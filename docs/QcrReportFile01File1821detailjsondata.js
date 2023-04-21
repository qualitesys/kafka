console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java 27 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KTableProcessorSupplier<K,V,K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#48"
 , "c1" : "KTableSuppressProcessorSupplier"
 , "c2" : "KTableSuppressProcessorSupplier(SuppressedInternal&lt;K&gt;;String;KTableImpl&lt;K,?,V&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#59"
 , "c1" : "Processor&lt;K,Change&lt;V&gt;,K,Change&lt;V&gt;&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#64"
 , "c1" : "KTableValueGetterSupplier&lt;K,V&gt;"
 , "c2" : "view()"
 , "c3" : "3"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#112"
 , "c1" : "boolean"
 , "c2" : "enableSendingOldValues(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument parentKTable is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessorSupplier@POLYN177702 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00064] For method view list of called methods Object monObjet|org.apache.kafka.streams.kstream.internals.KTableValueGetterSupplier parentKTable_valueGetterSupplierN178614|org.apache.kafka.streams.state.internals.Maybe buffer_priorValueForBufferedN179615|java.lang.String[] parentValueGetterSupplier_storeNamesN180125"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN178497 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN178497 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN178497 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.view@POLYN178497 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method enableSendingOldValues arguments boolean  forceMaterialization"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument suppress is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method init arguments ProcessorContext&lt;K ,Change&lt;V &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00142] For method init list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor ProcessorNodeMetrics_suppressionEmitSensorN182711"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method process arguments Record&lt;K ,Change&lt;V &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method buffer arguments Record&lt;K ,Change&lt;V &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00163] For method buffer list of called methods Object monObjet|long bufferTimeDefinition_timeN183753"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00163] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.enforceConstraints@POLYN183994 the MagicNumber/String  '%s buffer exceeded its max capacity. Currently [%d/%d] records and [%d/%d] bytes.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.enforceConstraints@POLYN183994 the MagicNumber/String  'The bufferFullStrategy [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.enforceConstraints@POLYN183994 the MagicNumber/String  '] is not implemented. This is a bug in Kafka Streams.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00200] For method emit arguments TimeOrderedKeyValueBuffer.Eviction&lt;K ,V &gt;  toEmit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00200] For method emit list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.ProcessorRecordContext internalProcessorContext_recordContextN185525"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#200"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00200] The argument toEmit is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.emit@POLYN185279 the MagicNumber/String  1.0d should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method shouldForward arguments Change&lt;V &gt;  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#215"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00215] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.streams.kstream.internals.suppress.KTableSuppressProcessorSupplier.KTableSuppressProcessor.shouldForward@POLYN186143 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/KTableSuppressProcessorSupplier.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
