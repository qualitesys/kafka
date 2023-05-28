console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProcessorSupplier<KIn,VIn,KIn,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamFlatTransformValues"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamFlatTransformValues" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#36"
 , "c1" : "KStreamFlatTransformValues"
 , "c2" : "KStreamFlatTransformValues(ValueTransformerWithKeySupplier&lt;KIn,VIn,Iterable&lt;VOut&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#41"
 , "c1" : "Processor&lt;KIn,VIn,KIn,VOut&gt;"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#46"
 , "c1" : "Set&lt;StoreBuilder&lt;?&gt;&gt;"
 , "c2" : "stores()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method init arguments ProcessorContext&lt;KIn ,VOut &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method process arguments Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00065] For method process list of called methods Object monObjet|VR valueTransformer_transformN163360"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.kstream.internals.KStreamFlatTransformValues.KStreamFlatTransformValuesProcessor.process@POLYN163199 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamFlatTransformValues.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
