console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java 12 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.internals.AbstractStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.AbstractStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#58"
 , "c1" : "AbstractStream"
 , "c2" : "AbstractStream(AbstractStream&lt;K,V&gt;)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#67"
 , "c1" : "AbstractStream"
 , "c2" : "AbstractStream(String;Serde&lt;K&gt;;Serde&lt;V&gt;;Set&lt;String&gt;;GraphNode;InternalStreamsBuilder)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#87"
 , "c1" : "InternalTopologyBuilder"
 , "c2" : "internalTopologyBuilder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#91"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "ensureCopartitionWith(Collection&lt;?extendsAbstractStream&lt;K,?&gt;&gt;)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00153"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#153"
 , "c1" : "Serde&lt;K&gt;"
 , "c2" : "keySerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#157"
 , "c1" : "Serde&lt;V&gt;"
 , "c2" : "valueSerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument stream is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.internals.AbstractStream.AbstractStream@POLYN175781 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.kstream.internals.AbstractStream.AbstractStream@POLYN175781 the MagicNumber/String  'parameter &amp;lt;sourceNodes&amp;gt; must not be null or empty' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method ensureCopartitionWith arguments Collection&lt;?  extends AbstractStream&lt;K ,? &gt; &gt;  otherStreams"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument joiner is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument joiner is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument valueMapper is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.kstream.internals.AbstractStream the MagicNumber/String  'valueMapper can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument valueTransformerSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.kstream.internals.AbstractStream the MagicNumber/String  'valueTransformerSupplier can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#147"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00147] The argument valueJoiner is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.kstream.internals.AbstractStream the MagicNumber/String  'joiner can't be null' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/AbstractStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
