console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TransformerSupplierAdapter.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/TransformerSupplierAdapter.java 2 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TransformerSupplierAdapter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "TransformerSupplier<KIn,VIn,Iterable<KeyValue<KOut,VOut>>>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.TransformerSupplierAdapter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.TransformerSupplierAdapter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TransformerSupplierAdapter"
 , "c2" : "TransformerSupplierAdapter(TransformerSupplier<KIn,VIn,KeyValue<KOut,VOut>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Transformer<KIn,VIn,Iterable<KeyValue<KOut,VOut>>>"
 , "c2" : "get()"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Set<StoreBuilder<?>>"
 , "c2" : "stores()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TransformerSupplierAdapter.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TransformerSupplierAdapter.java.svg" }

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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TransformerSupplierAdapter.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class TransformerSupplierAdapter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/TransformerSupplierAdapter.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.kstream.internals.TransformerSupplierAdapter.get@POLYN149220 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
