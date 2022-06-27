console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java 13 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ProcessorSupplier<KO,Change<VO>,K,SubscriptionResponseWrapper<VO>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ForeignJoinSubscriptionProcessorSupplier"
 , "c2" : "ForeignJoinSubscriptionProcessorSupplier(StoreBuilder<TimestampedKeyValueStore<Bytes,SubscriptionWrapper<K>>>;CombinedKeySchema<KO,K>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Processor<KO,Change<VO>,K,SubscriptionResponseWrapper<VO>>"
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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "6"
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
   "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00026] The class ForeignJoinSubscriptionProcessorSupplier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method init arguments ProcessorContext&lt;K ,SubscriptionResponseWrapper&lt;VO &gt; &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method process arguments Record&lt;KO ,Change&lt;VO &gt; &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00090] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN182399 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN182399 the MagicNumber/String  'Skipping record due to null key. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN182399 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.process@POLYN182399 the MagicNumber/String  'Skipping record due to null key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method prefixEquals arguments byte[]  x|byte[]  y"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.prefixEquals@POLYN184533 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionProcessorSupplier.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionProcessorSupplier.KTableKTableJoinProcessor.prefixEquals@POLYN184533 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
