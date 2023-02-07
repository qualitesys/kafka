console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java 14 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProcessorSupplier<KO,Change<VO>,K,SubscriptionResponseWrapper<VO>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#47"
 , "c1" : "ForeignJoinSubscriptionProcessorSupplier"
 , "c2" : "ForeignJoinSubscriptionProcessorSupplier(StoreBuilder&lt;TimestampedKeyValueStore&lt;Bytes,SubscriptionWrapper&lt;K&gt;&gt;&gt;;CombinedKeySchema&lt;KO,K&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#56"
 , "c1" : "Processor&lt;KO,Change&lt;VO&gt;,K,SubscriptionResponseWrapper&lt;VO&gt;&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method init arguments ProcessorContext&lt;K ,SubscriptionResponseWrapper&lt;VO &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00066] For method init list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor TaskMetrics_droppedRecordsSensorN165470"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method process arguments Record&lt;KO ,Change&lt;VO &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00078] For method process list of called methods Object monObjet|org.apache.kafka.streams.processor.api.ProcessorContext contextN166138"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN165785 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN165785 the MagicNumber/String  'Skipping record due to null key. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN165785 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN165785 the MagicNumber/String  'Skipping record due to null key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method prefixEquals arguments byte[]  x|byte[]  y"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.prefixEquals@POLYN167919 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.prefixEquals@POLYN167919 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
