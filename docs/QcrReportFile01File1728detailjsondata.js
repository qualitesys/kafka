console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java 26 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ProcessorSupplier<K,Change<V>,KO,SubscriptionWrapper<K>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ForeignJoinSubscriptionSendProcessorSupplier"
 , "c2" : "ForeignJoinSubscriptionSendProcessorSupplier(Function<V,KO>;Supplier<String>;Supplier<String>;Serde<KO>;Serializer<V>;boolean)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Processor<K,Change<V>,KO,SubscriptionWrapper<K>>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.svg" }

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
 , "c4" : "21"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class ForeignJoinSubscriptionSendProcessorSupplier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.ForeignJoinSubscriptionSendProcessorSupplier@POLYN174825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.ForeignJoinSubscriptionSendProcessorSupplier@POLYN174825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method init arguments ProcessorContext&lt;KO ,SubscriptionWrapper&lt;K &gt; &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.init@POLYN176180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.init@POLYN176180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method process arguments Record&lt;K ,Change&lt;V &gt; &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'Skipping record due to null foreign key. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'Skipping record due to null foreign key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'Skipping record due to null foreign key. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'Skipping record due to null foreign key. Topic, partition, and offset not known.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'Skipping record due to null foreign key. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'topic=[{}] partition=[{}] offset=[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/foreignkeyjoin/ForeignJoinSubscriptionSendProcessorSupplier.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.streams.kstream.internals.foreignkeyjoin.ForeignJoinSubscriptionSendProcessorSupplier.UnbindChangeProcessor.process@POLYN177211 the MagicNumber/String  'Skipping record due to null foreign key. Topic, partition, and offset not known.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
