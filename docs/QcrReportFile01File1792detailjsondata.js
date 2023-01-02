console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java 6 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProcessorSupplier<KO,SubscriptionWrapper<K>,CombinedKey<KO,K>,Change<ValueAndTimestamp<SubscriptionWrapper<K>>>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#45"
 , "c1" : "SubscriptionStoreReceiveProcessorSupplier"
 , "c2" : "SubscriptionStoreReceiveProcessorSupplier(StoreBuilder<TimestampedKeyValueStore<Bytes,SubscriptionWrapper<K>>>;CombinedKeySchema<KO,K>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#54"
 , "c1" : "Processor<KO,SubscriptionWrapper<K>,CombinedKey<KO,K>,Change<ValueAndTimestamp<SubscriptionWrapper<K>>>>"
 , "c2" : "get()"
 , "c3" : "7"
 , "c4" : "21"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00054] For method get list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor TaskMetrics_droppedRecordsSensorN164786|org.apache.kafka.streams.processor.api.ProcessorContext contextN165525|org.apache.kafka.common.utils.Bytes keySchema_toBytesN166219|V store_getN166645"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN163930 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN163930 the MagicNumber/String  'Skipping record due to null foreign key. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN163930 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN163930 the MagicNumber/String  'Skipping record due to null foreign key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN163930 the MagicNumber/String  'SubscriptionWrapper is of an incompatible version.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
