console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html" 
 , "texte" : "File tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java 253 rule violations " 
 , "fic2"  : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.tools.TransactionsCommand"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.tools.TransactionsCommand" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TransactionsCommand"
 , "c2" : "TransactionsCommand(Time)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addSubparser(Subparsers)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "execute(Admin;Namespace;PrintStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendColumnValue(StringBuilder;String;int)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printRow(List<Integer>;String[];PrintStream)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prettyPrintTable(String[];List<String[]>;PrintStream)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printErrorAndExit(String;Throwable)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printErrorAndExit(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Admin"
 , "c2" : "buildAdminClient(Namespace)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "ArgumentParser"
 , "c2" : "buildBaseParser()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "execute(String[];Function<Namespace,Admin>;PrintStream;Time)"
 , "c3" : "2"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.png" 

 , "ligneplantuml" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "45"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "158"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "34"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00055] The class TransactionsCommand contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method addSubparser arguments Subparsers  subparsers"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method execute arguments Admin  admin|Namespace  ns|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.name@POLYN296014 the MagicNumber/String  'abort' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method addSubparser arguments Subparsers  subparsers"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#86"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00086] The argument subparsers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'abort a hanging transaction (requires administrative privileges)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  '--topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'topic name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  '--partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'partition number' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'Brokers on versions 3.0 and above' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'For newer brokers, only the start offset of the transaction ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'to be aborted is required' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  '--start-offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'start offset of the transaction to abort' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'Brokers on versions older than 3.0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'For older brokers, you must provide all of these arguments' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  '--producer-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'producer id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  '--producer-epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'producer epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  '--coordinator-epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.addSubparser@POLYN296103 the MagicNumber/String  'coordinator epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method buildAbortSpec arguments Admin  admin|TopicPartition  topicPartition|long  startOffset"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00133] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.buildAbortSpec@POLYN297985 the MagicNumber/String  'Failed to validate producer state for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.buildAbortSpec@POLYN297985 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.buildAbortSpec@POLYN297985 the MagicNumber/String  'Could not find any open transactions starting at offset ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.buildAbortSpec@POLYN297985 the MagicNumber/String  ' on partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.buildAbortSpec@POLYN297985 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.buildAbortSpec@POLYN297985 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method abortTransaction arguments Admin  admin|AbortTransactionSpec  abortSpec"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#171"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00171] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.abortTransaction@POLYN299536 the MagicNumber/String  'Failed to abort transaction ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method execute arguments Admin  admin|Namespace  ns|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00182] The argument ns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'start_offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'producer_id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'The transaction to abort must be identified either with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  '--start-offset (for brokers on 3.0 or above) or with ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  '--producer-id, --producer-epoch, and --coordinator-epoch (for older brokers)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'producer_epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'Missing required argument --producer-epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'coordinator_epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  'Missing required argument --coordinator-epoch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.tools.TransactionsCommand.AbortTransactionCommand.execute@POLYN299961 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.name@POLYN302421 the MagicNumber/String  'describe-producers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00254] For method addSubparser arguments Subparsers  subparsers"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#254"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00254] The argument subparsers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  'describe the states of active producers for a topic partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  '--broker-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  'optional broker id to describe the producer state on a specific replica' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  '--topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  'topic name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  '--partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  'partition number' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.addSubparser@POLYN302515 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00278] For method execute arguments Admin  admin|Namespace  ns|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#278"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00278] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#278"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00278] The argument ns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00298] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  'broker_id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  'broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  'leader' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  'Failed to describe producers for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00297"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  ' on ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  'None' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.tools.TransactionsCommand.DescribeProducersCommand.execute@POLYN303504 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.name@POLYN306616 the MagicNumber/String  'describe' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#344"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00344] For method addSubparser arguments Subparsers  subparsers"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#344"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00344] The argument subparsers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.addSubparser@POLYN306710 the MagicNumber/String  'Describe the state of an active transactional-id.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.addSubparser@POLYN306710 the MagicNumber/String  'describe the state of an active transactional-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.addSubparser@POLYN306710 the MagicNumber/String  '--transactional-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.addSubparser@POLYN306710 the MagicNumber/String  'transactional id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.addSubparser@POLYN306710 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#357"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00357] For method execute arguments Admin  admin|Namespace  ns|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#357"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00357] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#357"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00357] The argument ns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00368] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.execute@POLYN307230 the MagicNumber/String  'transactional_id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.execute@POLYN307230 the MagicNumber/String  'Failed to describe transaction state of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.execute@POLYN307230 the MagicNumber/String  'transactional-id `' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.execute@POLYN307230 the MagicNumber/String  '`' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.execute@POLYN307230 the MagicNumber/String  'None' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.execute@POLYN307230 the MagicNumber/String  'None' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.tools.TransactionsCommand.DescribeTransactionsCommand.execute@POLYN307230 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.tools.TransactionsCommand.ListTransactionsCommand.name@POLYN309751 the MagicNumber/String  'list' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#417"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00417] For method addSubparser arguments Subparsers  subparsers"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#417"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00417] The argument subparsers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.tools.TransactionsCommand.ListTransactionsCommand.addSubparser@POLYN309845 the MagicNumber/String  'list transactions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#423"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00423] For method execute arguments Admin  admin|Namespace  ns|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00423"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#423"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00423] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00432"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00432] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00437] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00438] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00440] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.tools.TransactionsCommand.ListTransactionsCommand.execute@POLYN310046 the MagicNumber/String  'Failed to list transactions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00474"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#474"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00474] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.name@POLYN312150 the MagicNumber/String  'find-hanging' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#478"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00478] For method addSubparser arguments Subparsers  subparsers"
}} 
,
{ "ligne" : {
   "c1" : "00478"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#478"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00478] The argument subparsers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  'find hanging transactions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00482] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  '--broker-id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#483"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00483] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  'broker id to search for hanging transactions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00488] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  '--max-transaction-timeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00489] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  'maximum transaction timeout in minutes to limit the scope of the search (15 minutes by default)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  15 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#493"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00493] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  '--topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00496"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00496] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  'topic name to limit search to (required if --partition is specified)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#499"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00499] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00501"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  '--partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  'partition number' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.addSubparser@POLYN312239 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#509"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00509] For method execute arguments Admin  admin|Namespace  ns|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#509"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00509] The argument ns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00510"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00510] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.execute@POLYN313519 the MagicNumber/String  'broker_id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.execute@POLYN313519 the MagicNumber/String  'topic' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.execute@POLYN313519 the MagicNumber/String  'The `find-hanging` command requires either --topic ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00515] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.execute@POLYN313519 the MagicNumber/String  'or --broker-id to limit the scope of the search' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.execute@POLYN313519 the MagicNumber/String  'partition' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00521"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#521"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00521] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.execute@POLYN313519 the MagicNumber/String  'The --partition argument requires --topic to be provided' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.execute@POLYN313519 the MagicNumber/String  'max_transaction_timeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#567"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00567] For method collectTopicPartitionsToSearch arguments Admin  admin|Optional&lt;String &gt;  topic|Optional&lt;Integer &gt;  partition|Optional&lt;Integer &gt;  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#569"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00569] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#570"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00570] The argument partition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00592"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#592"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00592] For method filterHangingTransactions arguments Map&lt;Long ,List&lt;OpenTransaction &gt; &gt;  openTransactionsByProducerId|Map&lt;Long ,String &gt;  transactionalIds|Map&lt;String ,TransactionDescription &gt;  descriptions"
}} 
,
{ "ligne" : {
   "c1" : "00593"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#593"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00593] The argument openTransactionsByProducerId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00594"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#594"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00594] The argument transactionalIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00595"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#595"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00595] The argument descriptions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00601"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.filterHangingTransactions@POLYN316934 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#608"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00608] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.filterHangingTransactions@POLYN316934 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00629"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#629"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00629] For method printHangingTransactions arguments List&lt;OpenTransaction &gt;  hangingTransactions|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#630"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00630] The argument hangingTransactions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00645] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.printHangingTransactions@POLYN318221 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00646"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.printHangingTransactions@POLYN318221 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00655"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#655"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00655] For method describeTransactions arguments Admin  admin|Collection&lt;String &gt;  transactionalIds"
}} 
,
{ "ligne" : {
   "c1" : "00656"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#656"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00656] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00657"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#657"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00657] The argument transactionalIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00665"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00665] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00667"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00667] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00668] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.describeTransactions@POLYN319806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00678"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00678] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.describeTransactions@POLYN319806 the MagicNumber/String  'Failed to describe ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00679"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#679"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00679] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.describeTransactions@POLYN319806 the MagicNumber/String  ' transactions' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00684"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#684"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00684] For method groupByProducerId arguments List&lt;OpenTransaction &gt;  openTransactions"
}} 
,
{ "ligne" : {
   "c1" : "00689"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#689"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00689] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#698"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00698] For method listTopics arguments Admin  admin"
}} 
,
{ "ligne" : {
   "c1" : "00699"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#699"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00699] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00702"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.listTopics@POLYN321834 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00705"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#705"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00705] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.listTopics@POLYN321834 the MagicNumber/String  'Failed to list topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00710"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#710"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00710] For method findTopicPartitions arguments Admin  admin|Optional&lt;Integer &gt;  brokerId|List&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00727"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#727"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00727] For method findTopicPartitions arguments Admin  admin|Optional&lt;Integer &gt;  brokerId|List&lt;String &gt;  topics|List&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#728"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00728] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00729"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#729"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00729] The argument brokerId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00730"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#730"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00730] The argument topics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00731"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#731"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00731] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00743"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#743"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00743] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.findTopicPartitions@POLYN323007 the MagicNumber/String  'Failed to describe ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00743"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#743"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00743] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.findTopicPartitions@POLYN323007 the MagicNumber/String  ' topics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00747"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#747"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00747] For method hasReplica arguments int  brokerId|TopicPartitionInfo  partitionInfo"
}} 
,
{ "ligne" : {
   "c1" : "00749"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#749"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00749] The argument partitionInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00754"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#754"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00754] For method collectCandidateOpenTransactions arguments Admin  admin|Optional&lt;Integer &gt;  brokerId|long  maxTransactionTimeoutMs|List&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00779"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#779"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00779] The class OpenTransaction contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00792"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#792"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00792] For method collectCandidateOpenTransactions arguments Admin  admin|Optional&lt;Integer &gt;  brokerId|long  maxTransactionTimeoutMs|List&lt;TopicPartition &gt;  topicPartitions|List&lt;OpenTransaction &gt;  candidateTransactions"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#793"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00793] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#794"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00794] The argument brokerId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00796"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#796"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00796] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#797"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00797] The argument candidateTransactions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00822"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#822"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00822] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.collectCandidateOpenTransactions@POLYN325432 the MagicNumber/String  'Failed to describe producers for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00823"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00823] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.collectCandidateOpenTransactions@POLYN325432 the MagicNumber/String  ' partitions on broker ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00827"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#827"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00827] For method lookupTransactionalIds arguments Admin  admin|Set&lt;Long &gt;  producerIds"
}} 
,
{ "ligne" : {
   "c1" : "00828"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#828"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00828] The argument admin is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00829"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#829"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00829] The argument producerIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00842] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.lookupTransactionalIds@POLYN327017 the MagicNumber/String  'Received transaction listing {} which has a producerId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00843"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00843] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.lookupTransactionalIds@POLYN327017 the MagicNumber/String  'which was not requested' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00854"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#854"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00854] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.lookupTransactionalIds@POLYN327017 the MagicNumber/String  'Failed to list transactions for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00855"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#855"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00855] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand.lookupTransactionalIds@POLYN327017 the MagicNumber/String  ' producers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00866"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#866"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00866] The argument list is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00868"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#868"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00868] The argument consumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00870"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00870] In method org.apache.kafka.tools.TransactionsCommand.FindHangingTransactionsCommand the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00885"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#885"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00885] For method appendColumnValue arguments StringBuilder  rowBuilder|String  value|int  length"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#886"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00886] The argument rowBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00887"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#887"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00887] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00892"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#892"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00892] In method org.apache.kafka.tools.TransactionsCommand.appendColumnValue@POLYN329209 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00893"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#893"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00893] In method org.apache.kafka.tools.TransactionsCommand.appendColumnValue@POLYN329209 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00896"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#896"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00896] For method printRow arguments List&lt;Integer &gt;  columnLengths|String[]  row|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00897"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#897"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00897] The argument columnLengths is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00898"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#898"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00898] The argument row is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00899"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#899"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00899] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00903"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#903"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00903] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00904"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#904"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00904] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00902"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#902"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00902] In method org.apache.kafka.tools.TransactionsCommand.printRow@POLYN329714 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00906"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00906] In method org.apache.kafka.tools.TransactionsCommand.printRow@POLYN329714 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00911"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#911"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00911] For method prettyPrintTable arguments String[]  headers|List&lt;String[] &gt;  rows|PrintStream  out"
}} 
,
{ "ligne" : {
   "c1" : "00912"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#912"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00912] The argument headers is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00913"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#913"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00913] The argument rows is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00921"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00921] In method org.apache.kafka.tools.TransactionsCommand.prettyPrintTable@POLYN330534 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00930"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#930"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00930] For method printErrorAndExit arguments String  message|Throwable  t"
}} 
,
{ "ligne" : {
   "c1" : "00933"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#933"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00933] In method org.apache.kafka.tools.TransactionsCommand.printErrorAndExit@POLYN331686 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00933"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#933"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00933] In method org.apache.kafka.tools.TransactionsCommand.printErrorAndExit@POLYN331686 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00934"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#934"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00934] In method org.apache.kafka.tools.TransactionsCommand.printErrorAndExit@POLYN331686 the MagicNumber/String  ' Enable debug logging for additional detail.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00939"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#939"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00939] For method printErrorAndExit arguments String  message"
}} 
,
{ "ligne" : {
   "c1" : "00941"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#941"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00941] In method org.apache.kafka.tools.TransactionsCommand.printErrorAndExit@POLYN332104 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00944"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#944"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00944] For method buildAdminClient arguments Namespace  ns"
}} 
,
{ "ligne" : {
   "c1" : "00944"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#944"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00944] The argument ns is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00947"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#947"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00947] In method org.apache.kafka.tools.TransactionsCommand.buildAdminClient@POLYN332354 the MagicNumber/String  'command_config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00948"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00948] In method org.apache.kafka.tools.TransactionsCommand.buildAdminClient@POLYN332354 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00954"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#954"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00954] In method org.apache.kafka.tools.TransactionsCommand.buildAdminClient@POLYN332354 the MagicNumber/String  'Failed to load admin client properties' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00955"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#955"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00955] In method org.apache.kafka.tools.TransactionsCommand.buildAdminClient@POLYN332354 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00959"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#959"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00959] In method org.apache.kafka.tools.TransactionsCommand.buildAdminClient@POLYN332354 the MagicNumber/String  'bootstrap_server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00967"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#967"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00967] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'kafka-transactions.sh' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00969"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00969] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'This tool is used to analyze the transactional state of producers in the cluster. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00970"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#970"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00970] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'It can be used to detect and recover from hanging transactions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00972"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  '-v' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00972"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  '--version' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00974"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#974"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00974] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'show the version of this Kafka distribution and exit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00976"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#976"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00976] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  '--command-config' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00977"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#977"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00977] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'property file containing configs to be passed to admin client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00980"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#980"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00980] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'FILE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00981"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00983"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00983] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  '--bootstrap-server' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00984"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#984"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00984] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'hostname and port for the broker to connect to, in the form `host:port`  ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00985"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  '(multiple comma-separated entries can be given)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00988"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#988"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00988] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  'host:port' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#989"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00989] In method org.apache.kafka.tools.TransactionsCommand.buildBaseParser@POLYN333279 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00994"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#994"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00994] For method execute arguments String[]  args|Function&lt;Namespace ,Admin &gt;  adminSupplier|PrintStream  out|Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#996"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00996] The argument adminSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01022"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[01022] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {
   "c1" : "01010"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1010"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01010] In method org.apache.kafka.tools.TransactionsCommand.execute@POLYN334362 the MagicNumber/String  'command' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01011"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1011"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01011] In method org.apache.kafka.tools.TransactionsCommand.execute@POLYN334362 the MagicNumber/String  'commands' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01012"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1012"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01012] In method org.apache.kafka.tools.TransactionsCommand.execute@POLYN334362 the MagicNumber/String  'COMMAND' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01021"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1021"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01021] In method org.apache.kafka.tools.TransactionsCommand.execute@POLYN334362 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01026"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1026"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01026] In method org.apache.kafka.tools.TransactionsCommand.execute@POLYN334362 the MagicNumber/String  'command' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01033"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01033] In method org.apache.kafka.tools.TransactionsCommand.execute@POLYN334362 the MagicNumber/String  'Unexpected command ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.tools.TransactionsCommand.execute@POLYN334362 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1041"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01041] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "01041"
 , "c1link" : "./qc/tools/src/main/java/org/apache/kafka/tools/TransactionsCommand.java.html#1041"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[01041] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
