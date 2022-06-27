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
{ "ligne" : {
   "c1" : "ProcessorSupplier<KO,SubscriptionWrapper<K>,CombinedKey<KO,K>,Change<ValueAndTimestamp<SubscriptionWrapper<K>>>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SubscriptionStoreReceiveProcessorSupplier"
 , "c2" : "SubscriptionStoreReceiveProcessorSupplier(StoreBuilder<TimestampedKeyValueStore<Bytes,SubscriptionWrapper<K>>>;CombinedKeySchema<KO,K>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Processor<KO,SubscriptionWrapper<K>,CombinedKey<KO,K>,Change<ValueAndTimestamp<SubscriptionWrapper<K>>>>"
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
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class SubscriptionStoreReceiveProcessorSupplier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN181392 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN181392 the MagicNumber/String  'Skipping record due to null foreign key. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN181392 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN181392 the MagicNumber/String  'Skipping record due to null foreign key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/SubscriptionStoreReceiveProcessorSupplier.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.SubscriptionStoreReceiveProcessorSupplier.get@POLYN181392 the MagicNumber/String  'SubscriptionWrapper is of an incompatible version.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
