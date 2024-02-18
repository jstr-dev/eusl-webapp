import * as React from "react";
import {cn} from "@/lib/utils";

const Table = React.forwardRef<
    HTMLTableElement,
    React.HTMLAttributes<HTMLTableElement>
>(({className, ...props}, ref: React.Ref<HTMLTableElement>) => (
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn(
                "w-full caption-bottom text-normal border-hidden overflow-hidden",
                className
            )}
            {...props}
        />
    </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref: React.Ref<HTMLTableSectionElement>) => (
    <thead ref={ref} className={cn("", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref: React.Ref<HTMLTableSectionElement>) => (
    <tbody
        ref={ref}
        className={cn("[&>tr:hover>td]:bg-neutral-800", className)}
        {...props}
    />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({className, ...props}, ref: React.Ref<HTMLTableSectionElement>) => (
    <tfoot
        ref={ref}
        className={cn(
            "border-t font-medium [&>tr]:last:border-b-0",
            className
        )}
        {...props}
    />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
    HTMLTableRowElement,
    React.HTMLAttributes<HTMLTableRowElement>
>(({className, ...props}, ref: React.Ref<HTMLTableRowElement>) => (
    <tr
        ref={ref}
        className={cn(
            "transition-colors hover:cursor-pointer data-[state=selected]:bg-gray-300",
            className
        )}
        {...props}
    />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref: React.Ref<HTMLTableCellElement>) => (
    <th
        ref={ref}
        className={cn(
            "pb-4 hover:cursor-default text-neutral-300 h-2 px-4 text-left align-middle first:!text-left last:text-right" +
            " [&:has([role=checkbox])]:pr-0",
            className
        )}
        {...props}
    />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({className, ...props}, ref: React.Ref<HTMLTableCellElement>) => (
    <td
        ref={ref}
        className={cn("p-2.5 px-4 align-middle [&:has([role=checkbox])]:pr-0 first:rounded-l-lg last:rounded-r-lg last:text-right", className)}
        {...props}
    />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
    HTMLTableCaptionElement,
    React.HTMLAttributes<HTMLTableCaptionElement>
>(({className, ...props}, ref: React.Ref<HTMLTableCaptionElement>) => (
    <caption
        ref={ref}
        className={cn("mt-4 text-sm text-muted-foreground", className)}
        {...props}
    />
));
TableCaption.displayName = "TableCaption";

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
};
