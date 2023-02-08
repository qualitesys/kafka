console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java 16 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KStreamAggProcessorSupplier<K,V,K,V>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamReduce"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamReduce" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#44"
 , "c1" : "KStreamReduce"
 , "c2" : "KStreamReduce(String;Reducer&lt;V&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#50"
 , "c1" : "Processor&lt;K,V,K,Change&lt;V&gt;&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#55"
 , "c1" : "void"
 , "c2" : "enableSendingOldValues()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#123"
 , "c1" : "KTableValueGetterSupplier&lt;K,V&gt;"
 , "c2" : "view()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
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
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.enableSendingOldValues@POLYN163698 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method init arguments ProcessorContext&lt;K ,Change&lt;V &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method process arguments Record&lt;K ,V &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00082] For method process list of called methods Object monObjet|org.apache.kafka.streams.processor.api.ProcessorContext contextN165299|V store_getN165819|V record_valueN166164|long record_timestampN166238"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.KStreamReduceProcessor.process@POLYN164901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.KStreamReduceProcessor.process@POLYN164901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.KStreamReduceProcessor.process@POLYN164901 the MagicNumber/String  'Skipping record due to null key or value. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.KStreamReduceProcessor.process@POLYN164901 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.KStreamReduceProcessor.process@POLYN164901 the MagicNumber/String  'Skipping record due to null key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.KStreamReduceProcessor.process@POLYN164901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.kstream.internals.KStreamReduce.KStreamReduceProcessor.process@POLYN164901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method get arguments K  key"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamReduce.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
